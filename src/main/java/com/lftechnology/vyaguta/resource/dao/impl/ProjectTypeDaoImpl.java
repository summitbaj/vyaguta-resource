package com.lftechnology.vyaguta.resource.dao.impl;

import java.util.ArrayList;
import java.util.List;

import javax.ejb.Stateless;
import javax.persistence.criteria.CriteriaBuilder;
import javax.persistence.criteria.Predicate;
import javax.persistence.criteria.Root;
import javax.ws.rs.core.MultivaluedMap;

import com.lftechnology.vyaguta.commons.dao.BaseDao;
import com.lftechnology.vyaguta.resource.common.CommonConstant;
import com.lftechnology.vyaguta.resource.dao.ProjectTypeDao;
import com.lftechnology.vyaguta.resource.entity.ProjectType;

/**
 * 
 * @author Achyut Pokhrel <achyutpokhrel@lftechnology.com>
 *
 */
@Stateless
public class ProjectTypeDaoImpl extends BaseDao<ProjectType, String>implements ProjectTypeDao {

    public ProjectTypeDaoImpl() {
        super(ProjectType.class);
    }

    @Override
    protected Predicate[] extractPredicates(MultivaluedMap<String, String> queryParameters,
            CriteriaBuilder criteriaBuilder, Root<ProjectType> root) {
        List<Predicate> predicates = new ArrayList<>();

        // search by title
        if (queryParameters.containsKey(CommonConstant.TITLE)) {
            String title = queryParameters.getFirst(CommonConstant.TITLE).toUpperCase();
            Predicate predicate = criteriaBuilder.equal(criteriaBuilder.upper(root.get(CommonConstant.TITLE)), title);
            if (queryParameters.containsKey(CommonConstant.SEARCH_MODE)) {
                if (queryParameters.getFirst(CommonConstant.SEARCH_MODE).equals(CommonConstant.ANY)) {
                    predicate = criteriaBuilder.like(criteriaBuilder.upper(root.get(CommonConstant.TITLE)),
                            "%" + title + "%");
                }
            }
            predicates.add(predicate);
        }
        return predicates.toArray(new Predicate[] {});
    }
}
