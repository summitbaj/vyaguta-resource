package com.lftechnology.vyaguta.resource.entity;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.PrePersist;
import javax.persistence.PreUpdate;
import javax.persistence.Table;
import javax.validation.constraints.Size;

import org.hibernate.validator.constraints.NotBlank;

import com.lftechnology.vyaguta.commons.entity.BaseEntity;

/**
 * 
 * @author Achyut Pokhrel <achyutpokhrel@lftechnology.com>
 *
 */
@Entity
@Table(name = "project_status")
public class ProjectStatus extends BaseEntity implements Serializable {

    private static final long serialVersionUID = -7761707754863881913L;

    @NotBlank(message = "Title cannot be blank.")
    @Size(max = 255)
    private String title;

    @Size(max = 7, min = 4, message = "Enter color code in hex format")
    @Column(name = "color_code")
    private String color;

    public String getColor() {
        return color;
    }

    public void setColor(String color) {
        this.color = color;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    @Override
    public int hashCode() {
        final int prime = 31;
        int result = super.hashCode();
        result = prime * result + ((title == null) ? 0 : title.hashCode());
        return result;
    }

    @Override
    public boolean equals(Object obj) {
        if (this == obj)
            return true;
        if (!super.equals(obj))
            return false;
        if (getClass() != obj.getClass())
            return false;
        ProjectStatus other = (ProjectStatus) obj;
        if (title == null) {
            if (other.title != null)
                return false;
        } else if (!title.equals(other.title))
            return false;
        return true;
    }

    @PrePersist
    public void prePersists() {
        this.setTitle(this.getTitle().trim());
    }

    @PreUpdate
    public void preUpdates() {
        this.setTitle(this.getTitle().trim());
    }
}
