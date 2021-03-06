package com.lftechnology.vyaguta.resource.service.impl;

import static org.hamcrest.CoreMatchers.is;
import static org.junit.Assert.assertThat;
import static org.junit.Assert.assertTrue;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.UUID;

import org.junit.Before;
import org.junit.Test;
import org.mockito.InjectMocks;
import org.mockito.Matchers;
import org.mockito.Mock;
import org.mockito.Mockito;
import org.mockito.MockitoAnnotations;
import org.mockito.Spy;

import com.lftechnology.vyaguta.commons.exception.ObjectNotFoundException;
import com.lftechnology.vyaguta.commons.pojo.User;
import com.lftechnology.vyaguta.commons.util.MultivaluedMap;
import com.lftechnology.vyaguta.commons.util.MultivaluedMapImpl;
import com.lftechnology.vyaguta.resource.dao.ProjectTypeDao;
import com.lftechnology.vyaguta.resource.entity.ProjectType;;

/**
 * 
 * @author Achyut Pokhrel <achyutpokhrel@lftechnology.com>
 *
 */
public class ProjectTypeServiceImplTest {

    @Spy
    @InjectMocks
    private ProjectTypeServiceImpl projectTypeServiceImpl;

    @Mock
    private ProjectTypeDao projectTypeDao;

    private final UUID testId = UUID.randomUUID();

    @Before
    public void setup() {
        MockitoAnnotations.initMocks(this);
    }

    @Test
    public void testSaveWhenProjectTypeIsValidObject() {

        // arrange
        ProjectType projectType = this.buildProjectType();
        Mockito.when(projectTypeDao.save(projectType)).thenReturn(projectType);

        // act
        ProjectType resultProjectType = this.projectTypeServiceImpl.save(projectType);

        // assert
        Mockito.verify(projectTypeDao).save(projectType);
        assertThat(resultProjectType, is(projectType));
    }

    @Test
    public void testUpdate() {

        // arrange
        ProjectType projectType = this.buildProjectType();
        Mockito.when(this.projectTypeDao.update(projectType)).thenReturn(projectType);

        // act
        ProjectType resultProjectType = this.projectTypeServiceImpl.update(projectType);

        // assert
        Mockito.verify(projectTypeDao).update(projectType);
        assertThat(resultProjectType, is(projectType));
    }

    @Test(expected = ObjectNotFoundException.class)
    public void testMergeWhenIdIsNotValid() {

        // arrange
        Mockito.when(this.projectTypeDao.findById(testId)).thenReturn(null);
        ProjectType projectType = new ProjectType();

        // act
        this.projectTypeServiceImpl.merge(testId, projectType);

    }

    @Test
    public void testMergeWhenIdIsValidAndObjectIsValid() {

        // arrange
        ProjectType projectTypeNew = this.buildProjectType();
        ProjectType projectTypeOld = this.buildProjectType();
        projectTypeOld.setTitle("Title old");
        Mockito.when(projectTypeDao.findById(testId)).thenReturn(projectTypeOld);

        // act
        this.projectTypeServiceImpl.merge(testId, projectTypeNew);

        // assert
        assertThat(projectTypeOld.getTitle(), is(projectTypeNew.getTitle()));
        Mockito.verify(projectTypeDao).findById(testId);
        Mockito.verify(projectTypeServiceImpl).update(projectTypeOld);
    }

    @Test
    public void testRemove() {

        // arrange
        ProjectType projectType = new ProjectType();
        Mockito.doNothing().when(projectTypeDao).remove(projectType);

        // act
        this.projectTypeServiceImpl.remove(projectType);

        // assert
        Mockito.verify(projectTypeDao).remove(projectType);
    }

    @Test(expected = ObjectNotFoundException.class)
    public void testRemoveByIdWhenIdIsNotValid() {

        // arrange
        Mockito.when(this.projectTypeServiceImpl.findById(testId)).thenReturn(null);

        // act
        this.projectTypeServiceImpl.removeById(testId);
    }

    @Test
    public void testRemoveByIdWhenIdIsValid() {

        // arrange
        ProjectType projectType = this.buildProjectType();
        Mockito.when(projectTypeDao.findById(testId)).thenReturn(projectType);
        Mockito.doNothing().when(projectTypeServiceImpl).remove(projectType);

        // act
        this.projectTypeServiceImpl.removeById(testId);

        // assert
        Mockito.verify(this.projectTypeServiceImpl).remove(projectType);
        Mockito.verify(this.projectTypeDao).findById(testId);
    }

    @Test
    public void testfindById() {

        // arrange
        Mockito.when(projectTypeDao.findById(testId)).thenReturn(new ProjectType());

        // act
        this.projectTypeServiceImpl.findById(testId);

        // assert
        Mockito.verify(projectTypeDao).findById(testId);
    }

    @Test
    public void testFindAll() {

        // arrangepublic T findById(Class<T> t, Pk id);
        Mockito.when(projectTypeDao.findAll()).thenReturn(new ArrayList<ProjectType>());

        // act
        this.projectTypeServiceImpl.findAll();

        // assert
        Mockito.verify(projectTypeDao).findAll();
    }

    @Test
    public void testCount() {

        // arrange
        Mockito.when(projectTypeDao.count(null)).thenReturn(10L);

        // act
        Long result = this.projectTypeServiceImpl.count();

        // assert
        Mockito.verify(projectTypeDao).count(null);
        assertThat(result, is(Long.valueOf(10)));
    }

    @Test
    public void testFind() {

        // arrange
        Mockito.when(projectTypeDao.find(Matchers.anyInt(), Matchers.anyInt()))
                .thenReturn(new ArrayList<ProjectType>());

        // act
        this.projectTypeServiceImpl.find(2, 20);

        // assert
        Mockito.verify(projectTypeDao).find(Matchers.anyInt(), Matchers.anyInt());

    }

    @Test
    public void testFindByFilter() {

        // arrange
        Map<String, List<String>> multiValue = new HashMap<>();
        multiValue.put("title", Arrays.asList("Client"));
        MultivaluedMap<String, String> queryParameters = new MultivaluedMapImpl<>(multiValue);
        List<ProjectType> projectTypes = new ArrayList<>();
        projectTypes.add(this.buildProjectType());

        Mockito.when(projectTypeDao.findByFilter(queryParameters)).thenReturn(projectTypes);
        Mockito.when(projectTypeDao.count(queryParameters)).thenReturn(10L);

        // act
        Map<String, Object> result = this.projectTypeServiceImpl.findByFilter(queryParameters);

        // assert
        assertTrue(result.containsKey("count"));
        assertTrue(result.containsValue(10L));
        assertTrue(result.containsKey("data"));
        assertTrue(result.containsValue(projectTypes));
        Mockito.verify(projectTypeDao).count(queryParameters);
        Mockito.verify(projectTypeDao).findByFilter(queryParameters);
    }

    private ProjectType buildProjectType() {
        ProjectType projectType = new ProjectType();
        User user = this.buildUser();
        projectType.setId(UUID.randomUUID());
        projectType.setTitle("Test Title");
        projectType.setCreatedBy(user);
        projectType.setUpdatedAt(LocalDateTime.now());
        projectType.setCreatedAt(LocalDateTime.now());
        return projectType;
    }

    private User buildUser() {
        User user = new User();
        user.setEmail("achyutpokhrel@lftechnology.com");
        user.setId(UUID.randomUUID());
        user.setName("achyut pokhrel");
        return user;
    }
}
